import styled from 'styled-components'

export type SpaceProps = React.PropsWithChildren

const StyledSpace = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 12px;
`

const Space = ({ children }: SpaceProps) => {
  return <StyledSpace>{children}</StyledSpace>
}

export default Space
