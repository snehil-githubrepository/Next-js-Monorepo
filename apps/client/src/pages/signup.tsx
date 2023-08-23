import { Signup } from "ui";
import axios from "axios";

export default function SignupPage() {
  return (
    <div>
      <Signup
        onClick={async (username, password) => {
          const res = axios.post("/api/signup", {
            username,
            password,
          });
          localStorage.setItem("token", response.data.token);
        }}
      />
    </div>
  );
}
