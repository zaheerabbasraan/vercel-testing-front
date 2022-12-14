import { Box, styled} from '@mui/material';
import { Breadcrumb } from "app/components";
import Helments from './shared/Helments';
import Equipments from './shared/Equipments';
import LessonTypes from './shared/LessonType';

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));


const Assets = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Storefront", path: "/admin/storefront" }, { name: "Assets" }]} />
      </Box>

      <Helments/>
      <Equipments/>
      <LessonTypes/>
    </Container>
  );
};

export default Assets;
