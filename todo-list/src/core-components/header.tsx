import Container from "../components/container";
import Logo from "../components/logo"; // criar esse componente de logo


function Header() {
    return (
        <Container as="header" className="mt-3 md:mt-20">
           <Logo  className="h-9 md:h-12"/>
        </Container>    
    )
}

export default Header