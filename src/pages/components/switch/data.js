
export const dataSwitch = {
    dataEsJS: "En JavaScript, la estructura switch se utiliza para ejecutar uno de varios bloques de código basados en el valor de una expresión.",
    dataEnJS: "In JavaScript, the switch statement is used to execute one of many blocks of code based on the value of an expression.",
    codigoJS: `
      let fruta = 'manzana';
      switch (fruta) {
        case 'naranja':
          console.log('El precio de la naranja es $1.');
          break;
        case 'manzana':
          console.log('El precio de la manzana es $1.5.');
          break;
        case 'banana':
          console.log('El precio de la banana es $0.5.');
          break;
        default:
          console.log('Fruta no disponible.');
      }
    `,
    dataEsPY: "En Python, no existe una estructura switch nativa, pero se puede utilizar un diccionario para lograr un comportamiento similar.",
    dataEnPY: "In Python, there is no native switch statement, but you can use a dictionary to achieve similar behavior.",
    codigoPY: `
      def switch_demo(fruta):
          switcher = {
              'naranja': 'El precio de la naranja es $1.',
              'manzana': 'El precio de la manzana es $1.5.',
              'banana': 'El precio de la banana es $0.5.'
          }
          return switcher.get(fruta, 'Fruta no disponible.')
      
      fruta = 'manzana'
      print(switch_demo(fruta))
    `,
    dataEsJAVA: "En Java, la estructura switch se utiliza para ejecutar uno de varios bloques de código basados en el valor de una expresión.",
    dataEnJAVA: "In Java, the switch statement is used to execute one of many blocks of code based on the value of an expression.",
    codigoJAVA: `
      public class Main {
          public static void main(String[] args) {
              String fruta = "manzana";
              switch (fruta) {
                  case "naranja":
                      System.out.println("El precio de la naranja es $1.");
                      break;
                  case "manzana":
                      System.out.println("El precio de la manzana es $1.5.");
                      break;
                  case "banana":
                      System.out.println("El precio de la banana es $0.5.");
                      break;
                  default:
                      System.out.println("Fruta no disponible.");
              }
          }
      }
    `,
    dataEsExplication:
      "Las estructuras switch permiten que un programa tome decisiones y ejecute diferentes bloques de código basados en el valor de una expresión. En esta sección, veremos ejemplos de la estructura switch.",
    dataEnExplication:
      "Switch structures allow a program to make decisions and execute different blocks of code based on the value of an expression. In this section, we will look at examples of the switch statement.",
  };