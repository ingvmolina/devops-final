
import { Outlet, Link } from "react-router-dom";
import { Grid, GridItem } from '@chakra-ui/react'
import '../../../App.css'

const RootPage = () => {

    return (
        <>
          <Grid
            templateAreas={`"header header"
                            "main main"
                            "main main"`}
            gridTemplateRows={'50px 1fr'}
            gridTemplateColumns={'150px 1fr'}
            h='100%'
            gap='1'
            color='blackAlpha.700'
            fontWeight='bold'
          >
            <GridItem pl='2' bg='' area={'header'}>
              Rick y Morty
                <div
                  className="collapse navbar-collapse justify-content-end"
                  id="navbarNavAltMarkup">
                  <div className="navbar-nav fs-5">
                    <Link to="characters/" className="nav-link">
                      Personajes
                    </Link>
                    <Link to="episodes/" className="nav-link">
                      Episodios
                    </Link>
                    <Link
                      className="nav-link"
                      to="locations/" >Ubicaciones</Link>
                  </div>
                </div>
            </GridItem>
            <GridItem pl='2' bg='' area={'main'}>
              <Outlet />
            </GridItem>
          </Grid>
        </>
      );
};

export default RootPage;