import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button'

export default function FlexDirection() {
  return (
    <div style={{ width: '100%' }}>
      <Box display="flex" flexDirection="row-reverse">
        
          <Button>Button</Button>

      </Box>
    </div>
  );
}