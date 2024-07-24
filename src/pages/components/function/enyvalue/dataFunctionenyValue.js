export const dataFuncionSinRetorno = {
    dataEsJS: "En JavaScript, las funciones que no retornan un valor explícito simplemente omiten la palabra clave `return`. Estas funciones realizan operaciones como imprimir en consola o modificar variables globales.",
    dataEnJS: "In JavaScript, functions that do not return an explicit value simply omit the `return` keyword. These functions perform operations such as printing to the console or modifying global variables.",
    codigoJS: `
      function saludar(nombre) {
        console.log('Hola, ' + nombre + '!'); // Imprime un saludo
      }
  
      saludar('Hanz'); // Llama a la función
    `,
    dataEsPY: "En Python, las funciones que no retornan un valor explícito simplemente omiten la declaración `return`. Estas funciones realizan acciones como imprimir en consola o modificar variables globales.",
    dataEnPY: "In Python, functions that do not return an explicit value simply omit the `return` statement. These functions perform actions such as printing to the console or modifying global variables.",
    codigoPY: `
      def saludar(nombre):
          print('Hola, ' + nombre + '!') # Imprime un saludo
  
      saludar('Hanz') # Llama a la función
    `,
    dataEsJAVA: "En Java, los métodos que no retornan un valor se declaran con el tipo de retorno `void`. Estos métodos realizan operaciones como imprimir en consola o modificar el estado de un objeto.",
    dataEnJAVA: "In Java, methods that do not return a value are declared with the `void` return type. These methods perform operations such as printing to the console or modifying the state of an object.",
    codigoJAVA: `
      public class Main {
          public static void saludar(String nombre) {
              System.out.println('Hola, ' + nombre + '!'); // Imprime un saludo
          }
  
          public static void main(String[] args) {
              saludar('Hanz'); // Llama al método
          }
      }
    `,
    dataEsExplication: "Las funciones sin retorno de valores realizan acciones, como imprimir en consola o modificar el estado del programa, pero no devuelven un resultado explícito.",
    dataEnExplication: "Functions without return values perform actions, such as printing to the console or modifying the program state, but do not return an explicit result.",
  };
  