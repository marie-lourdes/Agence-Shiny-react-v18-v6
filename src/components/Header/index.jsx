import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StyledLink } from '../../utils/style/Atoms'
import WhiteLogo from '../../assets/white-logo.svg'
import BlackLogo from '../../assets/black-logo.svg'
import { useTheme } from '../../utils/hooks'

const HomeLogo = styled.img`
  height: 40px;
`

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
`

function Header() {
  const { theme } = useTheme()

  return (
    <NavContainer>
      <Link to="/">
        <HomeLogo src={theme === 'light' ? BlackLogo : WhiteLogo} />
      </Link>
      <div>
        <StyledLink $theme={theme} to="/">
          Accueil
        </StyledLink>
        <StyledLink $theme={theme} to="/freelances">
          Profils
        </StyledLink>
        <StyledLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledLink>
      </div>
    </NavContainer>
  )
}

export default Header