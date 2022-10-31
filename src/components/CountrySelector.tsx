import  * as React from "react";
import {HtmlHTMLAttributes} from 'react'
import countryList from "react-select-country-list";

interface CountrySelectorProps extends HtmlHTMLAttributes <HTMLElement> {
  value?: string;
}

export function CountrySelector(props: CountrySelectorProps) {
  
  const [country, setCountry] = React.useState<string>()
    
    const options = React.useMemo(() => countryList().getData(), []);
    const labels = React.useMemo(() => countryList().getLabels(), []);
    const values = React.useMemo(() => countryList().getValues(), []);
    const labelList = React.useMemo(() => countryList().getLabelList(), []);
    const valueList = React.useMemo(() => countryList().getValueList(), []);

    const getLabel = countryList().getLabel("");
    const getValue = countryList().getValue("");
    const setLabel = countryList().setLabel("", "");
    const setEmpty = countryList().setEmpty("");
    const native = countryList().native();

    return (
        <select {...props} value={props.value}>
          {options.map(option => <option key={String(option.value + Math.floor(Math.random() * 1000) )}>{option.label}</option>)}
        </select>
    );
}