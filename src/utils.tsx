import HyperLink from "./components/texts/HyperLink";
import { HeroGroup } from "./types";

export const heroGroups: HeroGroup[] = [
  {
    type: "intro",
    title: "I am Yago, a web developer.",
    subtitle: "Turning ideas into elegant and functional websites.",
  },
  {
    type: "navigation",
    title: "About me",
    subtitle: "Learn more about my background, skills, and what drives me.",
    link: <HyperLink link="https://example.com" content="Learn more" />,
  },
  {
    type: "navigation",
    title: "My work",
    subtitle: "Take a look at some of the projects I've worked on.",
    link: <HyperLink link="https://example.com" content="Download CV" />,
  },
];

export const navItems = ["Home", "About", "Portfolio", "Contact"];

export function dedent(str: string) {
  const lines = str.replace(/^\n/, "").split("\n");
  const indentLength = lines[0].match(/^\s*/)?.[0].length || 0;
  return lines.map((line) => line.slice(indentLength)).join("\n");
}
export const EN_CODE = dedent(` 
  // My profile
  class Developer {
    constructor(
      public name: string = "Yago Santana Freire",
      public age: number = 28,
      public role: string = "Front-end Developer",
      public phone: number = +55 (81) 9 8016-4962,
      public email: string = "ysantanaf@gmail.com",
      public skills: string[] = ["React", "TypeScript", "Node.js"]
    ) {}

    sayHello() {
      console.log(\`Hello! I'm \${this.name}, \${this.role}\`);
    }
    contactInfo() {
      console.log(\`Call me: \${this.phone}\`);
    }
  }   
  const me = new Developer();
  me.sayHello();    
  me.contactInfo();



`);

export const PT_CODE = dedent(`
  // Meu perfil
  class Desenvolvedor {
    constructor(
      public nome: string = "Yago Santana Freire",
      public idade: number = 28,
      public cargo: string = "Desenvolvedor Front-end",
      public telefone: number = +55 (81) 9 8016-4962,
      public email: string = "ysantanaf@gmail.com",
      public habilidades: string[] = ["React", "TypeScript", "Node.js"]
    ) {}
  
    digaOla() {
      console.log(\`Olá! Sou \${this.name}, \${this.role}\`);
    }
    informacoesDeContato() {
      console.log(\`Me ligue: \${this.phone}\`);
    }
  }
  const me = new Desenvolvedor();
 
  me.digaOla();
  me.informacoesDeContato();



  `);

export const themes: any = {
  dark: {
    background: "#1e1e1e",
    headerBg: "#252526",
    text: "#d4d4d4",
    lineNumber: "#858585",
    codeHover: "#2a2a2a",

    comment: "#6a9955",
    string: "#ce9178",
    keyword: "#569cd6",
    number: "#b5cea8",
    function: "#dcdcaa",
    operator: "#d4d4d4",
    class: "#4ec9b0",
  },
  light: {
    background: "#ffffff",
    headerBg: "#f3f3f3",
    text: "#333333",
    lineNumber: "#999999",
    codeHover: "#eeeeee",

    comment: "#008000",
    string: "#a31515",
    keyword: "#0000ff",
    number: "#098658",
    function: "#795e26",
    operator: "#000000",
    class: "#267f99",
  },
  solarized: {
    background: "#002b36",
    headerBg: "#073642",
    text: "#839496",
    lineNumber: "#586e75",
    codeHover: "#003b46",

    comment: "#586e75",
    string: "#2aa198",
    keyword: "#859900",
    number: "#d33682",
    function: "#268bd2",
    operator: "#839496",
    class: "#b58900",
  },
  dracula: {
    background: "#282a36",
    headerBg: "#44475a",
    text: "#f8f8f2",
    lineNumber: "#6272a4",
    codeHover: "#3a3c4e",

    comment: "#6272a4",
    string: "#f1fa8c",
    keyword: "#ff79c6",
    number: "#bd93f9",
    function: "#50fa7b",
    operator: "#f8f8f2",
    class: "#8be9fd",
  },
  github: {
    background: "#2f363d", // Fundo escuro
    headerBg: "#353b45", // Header escuro
    text: "#e1e4e8", // Texto mais claro
    lineNumber: "#6a737d",
    codeHover: "#434c56", // Cor do hover mais escura

    comment: "#6a737d",
    string: "#a5c2f6", // String mais suave
    keyword: "#d73a49",
    number: "#005cc5",
    function: "#6f42c1",
    operator: "#e1e4e8", // Mais claro para contraste
    class: "#22863a",
  },
};
