var zerarTudo = function () {
    location.reload(!0);
  },
  n = 0,
  resultadoGrupo = "",
  sorteio = [],
  sortear = function () {
    var e = {
      nG: prompt("Número de grupos"),
      tG: prompt("Quantidade de pessoas por grupo"),
    };

    e.nT = e.nG * e.tG;

    for (var u = {}, l = []; l.length < e.nG; )
      l[l.length] = "<strong>Grupo " + (l.length + 1) + "</strong>";

    for (; sorteio.length < e.nT; ) {
      var G = Math.ceil(Math.random() * e.nT);

      sorteio.indexOf(G) > -1 ||
        ((sorteio[sorteio.length] = G),
        (u[sorteio[n] - 1] = prompt("Nome do Jogador " + sorteio.length)),
        n++);
    }

    for (resultadoGrupo = "<h2>" + l[0] + ":</h2>", t = 0; t < e.tG; t++)
      resultadoGrupo += u[t] + "<br>";

    for (
      resultadoGrupo += "<br><br><br><h2>" + l[1] + ":</h2>", t = e.tG;
      t < 2 * e.tG;
      t++
    )
      resultadoGrupo += u[t] + "<br>";
    if (e.nG > 2) {
      for (
        resultadoGrupo += "<br><br><br><h2>" + l[2] + ":</h2>", t = 2 * e.tG;
        t < 3 * e.tG;
        t++
      )
        resultadoGrupo += u[t] + "<br>";
      if (e.nG > 3) {
        for (
          resultadoGrupo += "<br><br><br><h2>" + l[3] + ":</h2>", t = 3 * e.tG;
          t < 4 * e.tG;
          t++
        )
          resultadoGrupo += u[t] + "<br>";
        if (e.nG > 4) {
          for (
            resultadoGrupo += "<br><br><br><h2>" + l[4] + ":</h2>",
              t = 4 * e.tG;
            t < 5 * e.tG;
            t++
          )
            resultadoGrupo += u[t] + "<br>";
          if (e.nG > 5) {
            for (
              resultadoGrupo += "<br><br><br><h2>" + l[5] + ":</h2>",
                t = 5 * e.tG;
              t < 6 * e.tG;
              t++
            )
              resultadoGrupo += u[t] + "<br>";
            if (e.nG > 6) {
              for (
                resultadoGrupo += "<br><br><br><h2>" + l[6] + ":</h2>",
                  t = 6 * e.tG;
                t < 7 * e.tG;
                t++
              )
                resultadoGrupo += u[t] + "<br>";
              if (e.nG > 7)
                for (
                  resultadoGrupo += "<br><br><br><h2>" + l[7] + ":</h2>",
                    t = 7 * e.tG;
                  t < 8 * e.tG;
                  t++
                )
                  resultadoGrupo += u[t] + "<br>";
            }
          }
        }
      }
    }
    (document.getElementById("conteudo").innerHTML = resultadoGrupo),
      (n = 0),
      (resultadoGrupo = ""),
      (sorteio = []),
      ((e = { nG: "", tG: "" }).nT = ""),
      (u = {}),
      (l = []),
      (window.location.href = "#resultados");
  };
