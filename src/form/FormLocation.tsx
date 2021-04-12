import React, { useEffect, useState } from "react";
import { Form, Icon, Label, Search } from "semantic-ui-react";
import {
  Control,
  Controller,
  FieldErrors,
  RegisterOptions,
} from "react-hook-form";
import usePlacesAutocomplete, { getGeocode } from "use-places-autocomplete";

export interface ILocation {
  city?: string;
  region?: string;
  regionCode?: string;
  country?: string;
  countryCode?: string;
  lat: string;
  lng: string;
}

interface IProps {
  name: string;
  content: string;
  errors: FieldErrors;
  control: Control;
  rules?: Exclude<
    RegisterOptions,
    "valueAsNumber" | "valueAsDate" | "setValueAs"
  >;
  required?: boolean;
}

interface IAddressComponents {
  types: string[];
}

export default function FormLocation({
  name,
  content,
  errors,
  control,
  rules,
  required = false,
}: IProps) {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any>([]);
  const {
    value: usePlacesAutocompleteValue,
    suggestions: { data: suggestions },
    setValue,
  } = usePlacesAutocomplete({
    requestOptions: {
      // Restrict the Google results to only cities, otherwise it will return countries, street addresses, etc.
      types: ["(cities)"],
    },
    debounce: 300,
  });

  useEffect(() => {
    const _results = suggestions.map((suggestion) => ({
      key: suggestion.place_id,
      title: suggestion.structured_formatting.main_text,
      description: suggestion.structured_formatting.secondary_text,
      source: suggestion,
    }));
    setResults(_results);
  }, [suggestions]);

  const handleResultSelect = async (placeId: string, onChange: Function) => {
    setLoading(true);
    const result = await getGeocode({ placeId });
    const place = result[0];
    let lat = place.geometry.location.lat()?.toFixed(7);
    let lng = place.geometry.location.lng()?.toFixed(7);

    const countryComponent = place.address_components.find(
      (o: IAddressComponents) => o.types[0] === "country"
    );
    const countryCode = countryComponent?.short_name.toLowerCase();
    const country = countryComponent?.long_name;

    const stateComponent = place.address_components.find(
      (o: IAddressComponents) => o.types[0] === "administrative_area_level_1"
    );
    const regionCode = stateComponent?.short_name;
    const region = stateComponent?.long_name;

    const cityComponent = place.address_components.find(
      (o: IAddressComponents) => o.types[0] === "locality"
    );
    const city = cityComponent?.long_name;

    const location: ILocation = {
      city,
      country,
      countryCode,
      regionCode,
      region,
      lat,
      lng,
    };
    onChange(location);
    setLoading(false);
  };

  return (
    <Form.Field error={!!errors[name]} required={required}>
      <label htmlFor={name}>{content}</label>
      <Controller
        name={name}
        id={name}
        control={control}
        rules={rules}
        render={({ onChange, value }) => {
          return !value ? (
            <Search
              disabled={loading}
              loading={loading}
              minCharacters={2}
              onResultSelect={(e: any, { result }: any) =>
                handleResultSelect(result.source.place_id, onChange)
              }
              onSearchChange={(e: any, { value }: any) => setValue(value)}
              results={results}
              value={usePlacesAutocompleteValue}
            />
          ) : (
            <Label color="blue">
              {`${value.city}, ${value.country}`}
              <Icon
                link
                name="delete"
                onClick={(e: any) => {
                  onChange(null);
                  setValue("");
                }}
              />
            </Label>
          );
        }}
      />

      {!!errors[name] && (
        <Label pointing prompt color="red">
          {errors[name].message}
        </Label>
      )}
    </Form.Field>
  );
}
