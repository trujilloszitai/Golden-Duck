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
        
        public SqlConnection sqlConnection= new SqlConnection("Data Source = BABYFACE\\SQLEXPRESS; Initial Catalog = Homebanking; Integrated Security = True");

       
    }
    /* public void Consulta(string consulta, SqlConnection conexion, DataGridView nombreVistaBD)
    {
        SqlCommand comand = new SqlCommand(consulta, conexion);
        SqlDataAdapter adapter = new SqlDataAdapter();
        adapter.SelectCommand = comand;
        DataTable table = new DataTable();
        adapter.Fill(table);
        nombreVistaBD.DataSource = table;


    }
        public void Abrir(SqlConnection conexion)
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

