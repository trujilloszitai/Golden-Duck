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

namespace LycokatConexionGerente
{
    public partial class reportes : Form
    {
        BaseDeDatos conexion = new BaseDeDatos("Data Source = DESKTOP-3OV0RG8\\SQLEXPRESS; Initial Catalog = Homebanking; Integrated Security = True");
        SqlDataAdapter adapter;
        public reportes()
        {
            InitializeComponent();
        }

        private void reportes_Load(object sender, EventArgs e)
        {
            try
            {
                conexion.sqlConnection.Open();
                Console.WriteLine("conexion abierta");
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }

        private void button1_Click(object sender, EventArgs e)
        {
            adapter = conexion.Consulta("Select * from categorias");
            DataTable table = new DataTable();
            adapter.Fill(table);
            dataGridView1.DataSource = table;

        }
    }
}
