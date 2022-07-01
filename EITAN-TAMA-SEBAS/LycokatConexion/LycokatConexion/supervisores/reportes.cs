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
    public partial class reportes : Form
    {
        BaseDeDatos conexion = new BaseDeDatos("Data Source = BABYFACE\\SQLEXPRESS; Initial Catalog = Homebanking; Integrated Security = True"); //le ponemos el nombre de la BD
        SqlDataAdapter adapter;
        public reportes()=>InitializeComponent();
        private void reportes_Load(object sender, EventArgs e){}
        private void button1_Click(object sender, EventArgs e)
        {
            adapter = conexion.Consulta("");
            DataTable table = new DataTable();
            adapter.Fill(table);
            dataGridView1.DataSource = table;
        }

        private void dataGridView1_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {

        }
    }
}
