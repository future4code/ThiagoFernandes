import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export const Wrapper = styled.div`
  width:100%;
  height: 100%;
  margin: 0;
  padding: 0 0 0 20px;
  display: flex;
  flex-direction: column;
`
export const TxtField = styled(TextField)`
    margin: 15px;
    padding: 15px;
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 300px;
    height: 120px;
`
export const Btn = styled(Button)`
    margin: 10px;
    background: red;
    color: pink;
`