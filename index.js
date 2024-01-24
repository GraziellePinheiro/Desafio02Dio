//DESAFIO DO HEROI NIVEL 1

let nome = "Hercules";
let xp = 100500;

switch (true) {
  case xp <= 1000:
    xp = "Ferro";
    console.log(`O Herói ${nome} está no nivel ${xp}`);
    break;
  case xp >= 1001 && xp <= 2000:
    xp = "Bronze";
    console.log(`O Herói ${nome} está no nivel ${xp}`);
    break;

  case xp >= 2001 && xp <= 5000:
    xp = "Prata";
    console.log(`O Herói ${nome} está no nivel ${xp}`);
    break;

  case xp >= 6001 && xp <= 7000:
    xp = "Ouro";
    console.log(`O Herói ${nome} está no nivel ${xp}`);
    break;

  case xp >= 7001 && xp <= 8000:
    xp = "Platina";
    console.log(`O Herói ${nome} está no nivel ${xp}`);
    break;

  case xp >= 8001 && xp <= 9000:
    xp = "Ascendente";
    console.log(`O Herói ${nome} está no nivel ${xp}`);
    break;

  case xp >= 9001 && xp <= 10000:
    xp = "Radiante";
    console.log(`O Herói ${nome} está no nivel ${xp}`);
    break;

  case xp >= 10001:
    xp = "IMMORTAL";
    console.log(`O Herói ${nome} está no nivel ${xp}`);
    break;

  default:
    console.log("Invalido");
    break;
}
