import { useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Tooltip,
} from "@chakra-ui/react";

const Range = () => {
  const [sliderValue, setSliderValue] = useState<number>(50);
  const [showTooltip, setShowTooltip] = useState<boolean>(true);

  useEffect(() => {
    if (localStorage.getItem('butuhIstirahat')) {
      setSliderValue(parseFloat(localStorage.getItem('butuhIstirahat') as string));
    } else {
      localStorage.setItem('butuhIstirahat', '50');
    }
  }, []);

  const onChange = (v: number) => {
    setSliderValue(v);
    localStorage.setItem('butuhIstirahat', v.toString());
  }

  return (
    <ChakraProvider>
      <Slider
        id="slider"
        defaultValue={sliderValue}
        value={sliderValue}
        min={0}
        max={100}
        step={0.1}
        colorScheme='pink'
        onChange={(v) => onChange(v)}
        marginTop={"45px"}
        marginBottom={"15px"}
      >
        {[0, 20, 40, 60, 80, 100].map((num) => {
          return (
            <SliderMark value={num} mt="1" ml="-2.5" fontSize="sm" color="rgba(255, 255, 255, 0.8)" marginLeft={"-9px"} paddingTop={"8px"} key={num}>
              {num}
            </SliderMark>
          );
        })}
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <Tooltip
          hasArrow
          bg="var(--card)"
          color="white"
          placement="top"
          isOpen={showTooltip}
          label={`${sliderValue}`}
        >
          <SliderThumb />
        </Tooltip>
      </Slider>
    </ChakraProvider>
  );
};

export default Range;
