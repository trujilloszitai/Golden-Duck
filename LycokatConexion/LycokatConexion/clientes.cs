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
    public partial class clientes : Form
    {

        conexionBD conexion = new conexionBD("Data Source = DESKTOP-3OV0RG8\\SQLEXPRESS; Initial Catalog = Homebanking; Integrated Security = True");
        SqlDataAdapter adapter;

        public clientes()
        {
            InitializeComponent();
        }

        private void clientes_Load(object sender, EventArgs e)
        {

        }

        private void dataGridView1_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {
            
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
