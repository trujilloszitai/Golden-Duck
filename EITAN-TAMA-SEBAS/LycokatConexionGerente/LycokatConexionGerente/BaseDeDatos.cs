using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SqlClient;

namespace LycokatConexionGerente
{
    internal class BaseDeDatos
    {
        //HAY QUE INDICAR EL NOMBRE DEL DISPOSITIVO AL CUAL SE CONECTARA, EN ESTE CASO ES BABYFACE
        public SqlConnection conexionBD;
        public BaseDeDatos(string nombreBD)
        {
            conexionBD = new SqlConnection(nombreBD);
            try
            {
                conexionBD.Open();
                Console.WriteLine("conexion abierta");
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }
        public SqlDataAdapter Consulta(string consulta)
        {
            SqlCommand comand = new SqlCommand(consulta, conexionBD);
            SqlDataAdapter adapter = new SqlDataAdapter();
            adapter.SelectCommand = comand;
            return adapter;
        }
    }
}
