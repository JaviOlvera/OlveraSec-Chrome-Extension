#define WINVER 0x0502
#define _WIN32_WINNT 0x0502

#include <iostream>
#include <fstream>
#include <string>

#include <stdio.h>
#include <stdlib.h>
#include <windows.h>
#include <Windows.h>
#include <winuser.h>
#include <vector>
#include <sstream>
#include <thread>

using namespace std;


BOOL CALLBACK EnumWindowsProc(HWND hwnd, LPARAM lParam)
{
    // Parámetro lParam apunta al vector de HWND
    std::vector<HWND>* windowHandles = reinterpret_cast<std::vector<HWND>*>(lParam);

    // Buffer para almacenar el nombre de clase de la ventana
    char className[256];

    // Obtener el nombre de clase de la ventana
    GetClassNameA(hwnd, className, sizeof(className));

    for (size_t i = 0; i < 6; i++)
    {
        string cName = "Chrome_WidgetWin_" + to_string(i);

        // Comparar el nombre de clase con el que estamos buscando
        if (strcmp(className, cName.c_str()) == 0)
        {
            // Agregar el identificador de ventana al vector
            windowHandles->push_back(hwnd);
        }
    }



    // Continuar la enumeración
    return TRUE;
}

std::vector<std::string> splitString(const std::string& texto, char delimitador)
{
    std::vector<std::string> tokens;
    std::string token;
    std::istringstream tokenStream(texto);

    while (std::getline(tokenStream, token, delimitador))
    {
        tokens.push_back(token);
    }

    return tokens;
}

void CloseChrome()
{
    // Encuentra la ventana de Chrome
    HWND chromeWindow = FindWindowA("Chrome_WidgetWin_1", NULL);

    // Verifica si se encontró la ventana de Chrome
    if (chromeWindow == NULL)
    {
        //std::cout << "No se pudo encontrar la ventana de Google Chrome." << std::endl;
        //return 1;
    }
    else
    {
        //cout << "ventana encontrada" << endl;
        /*CloseWindow(chromeWindow);
        PostMessage(chromeWindow, WM_CLOSE, 0, 0);
        PostMessage(chromeWindow, WM_QUIT, 0, 0);*/
        //DestroyWindow(chromeWindow);


        std::vector<HWND> windowHandles;

        // Enumerar todas las ventanas
        EnumWindows(EnumWindowsProc, reinterpret_cast<LPARAM>(&windowHandles));

        // Verificar si se encontraron ventanas
        if (!windowHandles.empty())
        {
            //std::cout << "Se encontraron " << windowHandles.size() << " ventanas de Chrome.\n";
            // Acceder a los identificadores de ventana almacenados en el vector
            for (size_t i = 0; i < windowHandles.size(); ++i) {

                //std::cout << "Ventana " << i + 1 << ": HWND=" << windowHandles[i] << std::endl;
                //cout << "Ventana Cerrada!" << endl;
                CloseWindow(windowHandles[i]);
                PostMessage(windowHandles[i], WM_CLOSE, 0, 0);
                PostMessage(windowHandles[i], WM_QUIT, 0, 0);
            }
        }
        else {
            //std::cerr << "No se encontraron ventanas de Chrome.\n";
        }
    }
}


int main()
{
    string extensionId = "fpcbjcggeephbeeodanphnlfdjkameak";
    bool isEnabled = true;
    string username = "usuario";

    cout << "OlveraSec se ha iniciado correctamente!" << endl << endl;

    while (true)
    {
        // Ruta relativa del archivo de texto
        std::string archivo = "data.txt";
        string data = "";

        // Intenta abrir el archivo
        std::ifstream ifs(archivo);

        // Verifica si el archivo se abrió correctamente
        if (!ifs.is_open())
        {
            std::cerr << "ERROR: No se pudo abrir el archivo: " << archivo << std::endl;
            return 1;
        }

        // Lee el contenido del archivo línea por línea
        std::string linea;
        while (std::getline(ifs, linea))
        {
            data += linea;
        }

        std::vector<std::string> variables = splitString(data, ';');

        isEnabled = (splitString(variables[0], '=')[1] == "t" ? true : false);
        extensionId = splitString(variables[1], '=')[1];
        username = splitString(variables[2], '=')[1];

        // Cierra el archivo después de leerlo
        ifs.close();


        if (isEnabled)
        {
            std::ifstream myfile;

            myfile.open("C:\\Users\\" + username + "\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Secure Preferences");


            string file = "";
            std::string myline;

            if (myfile.is_open())
            {
                while (myfile)
                {
                    std::getline(myfile, myline);

                    file += myline;
                }

                //cout << file;

                size_t extensionPos = file.find(extensionId);

                if (extensionPos != std::string::npos)
                {
                    size_t pos = file.find("\"state\":", extensionPos) + 8;

                    myfile.close(); // Cerrar el archivo de lectura


                    if (file[pos] == '0')
                    {
                        CloseChrome();
                    }
                }
                else
                {
                    CloseChrome();
                }
            }
            else
            {
                std::cout << "No se ha podido abrir el archivo" << endl;
                CloseChrome();
            }
        }

        std::this_thread::sleep_for(std::chrono::milliseconds(1000));
    }


    //system("pause");

    return 0; // Terminar el programa con éxito
}


