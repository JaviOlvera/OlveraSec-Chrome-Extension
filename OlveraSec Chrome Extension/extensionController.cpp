#include <iostream>
#include <fstream>
#include <string>

using namespace std;

int main()
{
    // Ruta del archivo
    std::string ruta_archivo = "ruta_del_archivo";

    string extensionId = "mbonpjpebeijhjikkjaeafdalmdodhid";

    // Abrir el archivo en modo de lectura
    std::ifstream archivo_entrada(ruta_archivo);

    // Verificar si el archivo se abrió correctamente
    if (!archivo_entrada.is_open()) {
        std::cerr << "Error: No se pudo abrir el archivo para lectura." << std::endl;
        return 1; // Terminar el programa con un código de error
    }

    // Leer el contenido del archivo
    std::string contenido;
    std::string linea;
    while (std::getline(archivo_entrada, linea))
    {
        contenido += linea + "\n";
    }

    // Cerrar el archivo de entrada
    archivo_entrada.close();

    size_t extensionPos = contenido.find(extensionId);
    size_t pos = contenido.find("\"state\":", extensionPos) + 8;
    contenido.replace(pos, 1, "1");


    // Abrir el archivo en modo de escritura (sobrescribir)
    std::ofstream archivo_salida(ruta_archivo);

    // Verificar si el archivo se abrió correctamente
    if (!archivo_salida.is_open()) {
        std::cerr << "Error: No se pudo abrir el archivo para escritura." << std::endl;
        return 1; // Terminar el programa con un código de error
    }

    // Escribir el contenido modificado en el archivo
    archivo_salida << contenido;

    // Cerrar el archivo de salida
    archivo_salida.close();

    std::cout << "La sustitución se realizó correctamente." << std::endl;

    return 0; // Terminar el programa con éxito
}
