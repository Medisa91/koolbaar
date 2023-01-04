export function getCityCountryFromGooglePlace(place) {
  let location: any;
  let country: string;
  let countryCity: string;
  if (place.label.includes(",")) {
    location = { value: place.value, label: place.label };
    country = place.label.split(", ")[place.label.split(", ").length - 1];
    countryCity = `${place.label.split(", ")[0]}, ${
      place.label.split(", ")[place.label.split(", ").length - 1]
    }`;
    const data = { location, country, countryCity };
    return data;
  } else if (place.label.includes("-")) {
    location = { value: place.value, label: place.label };
    country = place.label.split(" - ")[place.label.split(" - ").length - 1];
    countryCity = `${place.label.split(" - ")[0]}, ${
      place.label.split(" - ")[place.label.split(" - ").length - 1]
    }`;
    const data = { location, country, countryCity };
    return data;
  } else {
    location = { value: place.value, label: place.label };
    country = place.label;
    countryCity = place.label;
    const data = { location, country, countryCity };
    return data;
  }
}
