/* eslint-disable react/style-prop-object */
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';
import { DashboardContent } from 'src/layouts/dashboard';

// ----------------------------------------------------------------------

type Props = {
  title?: string;
};

export function BlankView({ title = 'Blank' }: Props) {
  return (
    <DashboardContent maxWidth="xl">
      <Typography variant="h4"> {title} </Typography>

      <Box
        sx={{
          mt: 5,
          width: 1,
          height: 1,
          borderRadius: 2,
          bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.04),
          border: (theme) => `dashed 1px ${theme.vars.palette.divider}`,
          position: 'relative',
        }}
      >
        <Box
          sx={{
            bgcolor: 'red',
            height: 50,
            width: 50,
            color: 'white',
            position: 'relative',
            top: 20,
            right: 30,
            bottom: 10,
            left: 40,
          }}
        >
          <Box
            sx={{
              bgcolor: 'black',
              color: 'white',
              position: 'absolute',
              right: 2,
              left: 2,
              bottom: 2,
              top: 2,
            }}
          >
            box 1
          </Box>
        </Box>

        <Box sx={{ bgcolor: 'green', height: 50, width: 50, color: 'white' }}>box 2</Box>

        <Box
          sx={{
            bgcolor: 'black',
            height: 50,
            width: 50,
            color: 'white',
            position: 'absolute',
            bottom: 0,
            left: 10,
            right: 10,
          }}
        >
          box 3
        </Box>
      </Box>
    </DashboardContent>
  );
}
