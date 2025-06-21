
import { styled } from "@mui/system";

const Wrapper = styled("div")`
  max-width: 500px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;

  .form-field {
    margin-bottom: 20px;
  }

  .description {
    min-height: 108px;

    & > div {
      height: 100%;

      .MuiFilledInput-root {
        width: 100%;
      }
    }
  }

  .secondary {
    width: 50px;
    height: 40px;
    padding: 0;
    min-width: unset;
  }

  .submit-btn {
    background-color: #007bff;
    color: #fff;
    font-weight: bold;
    padding: 10px 16px;
    border-radius: 4px;
    width: 100%;
    text-transform: none;
  }
`;

export default Wrapper;