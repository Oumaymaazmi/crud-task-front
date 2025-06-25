
import { styled } from "@mui/system";
const Wrapper = styled("div")`
  max-width: 1500px;
  margin: 40px auto;
  padding: 24px;
  background-color: #f8f9fa;
  border-radius: 8px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;

    h2 {
      margin: 0;
      color: #343a40;
    }

    .logout-btn {
      border-color: #d32f2f;
      color: #d32f2f;
      font-weight: bold;
      text-transform: none;
    }

    .logout-btn:hover {
      background-color: #fddede;
    }
  }

  .timeline {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 24px;

    .selected {
      background-color: #e9f5ff;
      border-left: 4px solid #007bff;
      padding: 10px;
      border-radius: 4px;
    }

    h4 {
      margin: 0 0 4px;
      color: #007bff;
    }

    p {
      margin: 0;
      font-size: 14px;
      color: #6c757d;
    }

    .success {
      color: green;
    }

    .error {
      color: red;
    }
  }

  .form-container {
    background-color: white;
    padding: 24px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }
`;

export default Wrapper;