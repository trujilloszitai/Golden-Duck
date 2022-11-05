using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.SqlClient;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace LycokatConexion
{
    public partial class EliminarSupervisor : UserControl
    {
        BaseDeDatos conexion = new BaseDeDatos("Data Source = DESKTOP-Q3RKHA9\\SQLEXPRESS; Initial Catalog = HomebankingUSAR; Integrated Security = True");
        SqlDataAdapter adapter;
        public EliminarSupervisor()
        {
            InitializeComponent();
        }

        private void EliminarSupervisor_Load(object sender, EventArgs e)
        {

        }

        private void dataGridView1_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {
           
        }

        private void button2_Click(object sender, EventArgs e)
        {
            try
            {
                adapter = conexion.Consulta("Select * from supger");
                DataTable table = new DataTable();
                adapter.Fill(table);
                dataGridView1.DataSource = table;
            }
            catch (Exception ex) //en caso de error se imprimira cual es la falla
            {
                var resultado = MessageBox.Show("Hubo un error inesperado. Presione Yes si quiere saber mas informacion", "Error", MessageBoxButtons.OKCancel, MessageBoxIcon.Warning);
                if (resultado == DialogResult.OK)
                {
                    MessageBox.Show(ex.Message);
                }
            }
        }
    }
}
