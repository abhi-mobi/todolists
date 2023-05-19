import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { useState } from "react";

export default function Login() {
  const [userdata, setuserdata] = useState({
    name: "testname",
    email: "test@mail.com",
  });

  function LoginAPi() {
    fetch("http://localhost:3001/Login")
      .then(async (response) => {
        if (response.ok) {
          let data = await response.json();
          console.log(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function SingUP() {
    console.log(userdata);
    fetch("http://localhost:3001/singup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userdata),
    })
      .then(async (response) => {
        if (response.ok) {
          let data = await response.json();
          console.log(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Grid container>
      <Grid item md={12}>
        <label>username</label>
        <input
          value={userdata.name}
          onChange={(event) => {
            setuserdata((pre) => ({ ...pre, name: event.target.value }));
          }}
          type="text"
        />
        <label>email</label>
        <input
          value={userdata.email}
          onChange={(event) => {
            setuserdata((pre) => ({ ...pre, email: event.target.value }));
          }}
          type="text"
        />
        <Stack direction="row" spacing={2}>
          <button onClick={SingUP}>SingUP</button>
          <button onClick={LoginAPi}>Login</button>
        </Stack>
      </Grid>
    </Grid>
  );
}
