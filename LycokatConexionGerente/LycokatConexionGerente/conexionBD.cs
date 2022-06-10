using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SqlClient;

namespace LycokatConexionGerente
{
    internal class conexionBD
    {
        //HAY QUE INDICAR EL NOMBRE DEL DISPOSITIVO AL CUAL SE CONECTARA, EN ESTE CASO ES BABYFACE (COMPU EITAN)

        public SqlConnection sqlConnection = new SqlConnection("Data Source = BABYFACE\\SQLEXPRESS; Initial Catalog = Homebanking; Integrated Security = True");


    }
    /* public void Abrir(SqlConnection conexion)
     {
         //conexionBD conexion = new conexionBD();


         try
         {
         conexion.Open();
             Console.WriteLine("conexion abierta");
         }
         catch (Exception ex)
         {
             Console.WriteLine(ex.Message);
         }
     }
     public void Cerrar()
     {
         conexionBD conexion = new conexionBD();
         conexion.sqlConnection.Close();
     }*/
}
