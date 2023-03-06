import { hash } from "bcryptjs";
import { v4 as uuidV4 } from "uuid";

import createConnection from "../index";

async function create() {
  const connection = await createConnection("localhost");

  const id = uuidV4();
  const password = await hash("admin", 8);

  await connection.query(`
    INSERT INTO USERS(id, name, username,  email, password, "isAdmin", created_at, driver_license)
      values('${id}', 'admin','admin', 'email@admin.com.br', '${password}', true, 'now()', 'xxxxxx')
  `);

  await connection.close;
}

create().then(() => console.log("User admin created!"));
