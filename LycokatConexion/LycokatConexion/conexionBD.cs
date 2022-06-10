using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Data.SqlClient;

namespace LycokatConexion
{
    internal class conexionBD
    {
        //HAY QUE INDICAR EL NOMBRE DEL DISPOSITIVO AL CUAL SE CONECTARA, EN ESTE CASO ES BABYFACE (COMPU EITAN)

        public SqlConnection sqlConnection; 


        public conexionBD(string SQLCONECTION)
        {

            sqlConnection = new SqlConnection(SQLCONECTION);
            try
            {
               sqlConnection.Open();
                Console.WriteLine("conexion abierta");
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }
        public SqlDataAdapter Consulta(string consulta)
        {

           SqlCommand comand = new SqlCommand(consulta, sqlConnection);
           SqlDataAdapter adapter = new SqlDataAdapter();
           adapter.SelectCommand = comand;
            return adapter;


        }
        
    }
}


