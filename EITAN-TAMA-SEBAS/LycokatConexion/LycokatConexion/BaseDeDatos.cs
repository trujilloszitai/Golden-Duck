using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Data.SqlClient;//neceario para las funciones de SQL

namespace LycokatConexion
{
    internal class BaseDeDatos
    {
        
        public SqlConnection conexionBD; 
        public BaseDeDatos(string nombreBD)//nombreBD es para ponerle el nombre y asi el sqlconnection conecta con la BD.
        {
            conexionBD = new SqlConnection(nombreBD);
            try //abrimos conexion
            {
                conexionBD.Open();
                Console.WriteLine("conexion abierta");
            }
            catch (Exception ex) //en caso de error se imprimira cual es la falla
            {
                Console.WriteLine(ex.Message);
            }
        }
        public SqlDataAdapter Consulta(string consulta)//hacer el query
        {
           SqlCommand comand = new SqlCommand(consulta, conexionBD);
           SqlDataAdapter adapter = new SqlDataAdapter();
           adapter.SelectCommand = comand;
            return adapter;//se devuelve el adapter que seria para compilar todo los datos ingresados
        }
        public SqlCommand Comando(string consulta)
        {
            SqlCommand comand = new SqlCommand(consulta, conexionBD);
            return comand;

        }
    }
}


