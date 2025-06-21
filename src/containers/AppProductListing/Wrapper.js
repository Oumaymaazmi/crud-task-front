import { styled } from "@mui/system";

const Wrapper = styled("div")`
  .table-container {
    margin-top: 24px;
    border-radius: 8px;
    overflow: hidden;
  }

  .header-actions {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  .pagination {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }

  .action-buttons {
    display: flex;
    gap: 8px;
    justify-content: flex-end;
  }

  .delete-btn {
    color: red;
    border-color: red;
    &:hover {
      background-color: rgba(255, 0, 0, 0.04);
    }
  }
`;

export default Wrapper;
