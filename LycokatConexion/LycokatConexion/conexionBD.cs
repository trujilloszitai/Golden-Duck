using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SqlClient;

namespace LycokatConexion
{
    internal class conexionBD
    {
        //HAY QUE INDICAR EL NOMBRE DEL DISPOSITIVO AL CUAL SE CONECTARA, EN ESTE CASO ES BABYFACE (COMPU EITAN)
        //string cadena = "Data Source=BABYFACE\\SQLEXPRESS;Initial Catalog=Homebanking; Integrated Security=True";
        //public SqlConnection conectarBD = new SqlConnection("Data Source = BABYFACE\\SQLEXPRESS; Initial Catalog = Homebanking; Integrated Security = True");

        /* public conectarse()
         {
             public SqlConnection conectarBD = new SqlConnection("Data Source = BABYFACE\\SQLEXPRESS; Initial Catalog = Homebanking; Integrated Security = True");
             //conectarBD.ConnectionString = cadena;
         }*/
        public void abrir(SqlConnection conectarBD)
        {
            try
            {
                conectarBD.Open();
                Console.WriteLine("conexion abierta");
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }
        public void cerrar()
        {
            conectarBD.Close();
        }
    }
}
