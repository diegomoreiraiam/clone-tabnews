const { exec } = require("node:child_process");

function checkPostgres() {
  exec("docker exec postgres_dev pg_isready --host localhost", handleReturn);

  function handleReturn(error, stdout) {
    if (stdout.search("accepting connections") === -1) {
      //console.log("Não está aceitando conexões ainda");
      process.stdout.write(".");
      checkPostgres();
      return;
    }
    console.log("\n\n ✅ Postgres está pronto e aceitando conexões \n");
  }
}

process.stdout.write("\n\n❌ Aguardando postgres aceitas conexões");

checkPostgres();
