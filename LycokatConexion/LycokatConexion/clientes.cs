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
        
        public SqlConnection conectarBD = new SqlConnection("Data Source = BABYFACE\\SQLEXPRESS; " +
            "Initial Catalog = Homebanking; " +
            "Integrated Security = True");
        
        public clientes()
        {
            InitializeComponent();
        }

        private void clientes_Load(object sender, EventArgs e)
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

        private void dataGridView1_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {
            
        }

        private void button1_Click(object sender, EventArgs e)
        {
            
            

            SqlCommand comand = new SqlCommand("Select * from categorias", conectarBD);
            SqlDataAdapter adapter = new SqlDataAdapter();
            adapter.SelectCommand = comand;
            DataTable table = new DataTable();
            adapter.Fill(table);
            dataGridView1.DataSource = table;
        }
    }
}
