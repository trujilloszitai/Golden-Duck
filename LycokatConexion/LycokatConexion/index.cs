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
    public partial class index : Form
    {
        public index()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            Form formulario = new clientes();
            formulario.Show();

        }

        private void index_Load(object sender, EventArgs e)
        {
            conexionBD conexion = new conexionBD();
            conexion.abrir();
        }
    }
}
