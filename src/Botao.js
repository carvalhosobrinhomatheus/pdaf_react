import React from 'react';
import Button from '@material-ui/core/Button';
import { useStateValue } from './store/state';

const ThemedButton = () => {
  const [{ theme }, dispatch] = useStateValue();
  console.log(theme);
  return (
    <Button
      color={theme.color.primary}
      onClick={() => dispatch({
        type: 'changeColor',
        newColor: { primary: 'primary'}
      })}
    >
      Make me blue!
    </Button>
  );
}

export default ThemedButton;