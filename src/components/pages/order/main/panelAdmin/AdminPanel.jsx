import styled from "styled-components";
import { theme } from "../../../../../assets/theme";
import AddProductForm from "./AddProductForm";

export const AdminPanel = ({ panelTitle, isopen }) => {
  return (
    <AdminPanelStyled isopen={isopen}>
      <div className="panel">
        {/* <h2>{panelTitle}</h2> */}
        <AddProductForm />
      </div>
    </AdminPanelStyled>
  );
};

const AdminPanelStyled = styled.div`
  display: ${(props) => (props.isopen ? "flex" : "none")};
  align-items: center;
  height: 250px;
  background-color: ${theme.colors.white};
  border-radius: 0 0 15px 0;
  box-shadow: ${theme.shadows.subtle};

  h2 {
    font-size: ${theme.fonts.size.P0};
    margin-top: 17px;
    margin-left: 22px;
  }
`;
