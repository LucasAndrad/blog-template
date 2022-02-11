import ButtonMui from '@mui/material/Button';
import styled from 'styled-components';

type Props = {
  marginTop?: string;
}

export const Button = styled(ButtonMui)<Props>`
  margin-top: ${props => props.marginTop || '0px'};
`;
