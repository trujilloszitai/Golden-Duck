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
        public index()=>InitializeComponent();
        private void button1_Click(object sender, EventArgs e)
        {
            Form formulario = new clientes();//new opciones();
            formulario.Show();
            this.Hide();   
        }
        private void index_Load(object sender, EventArgs e){}
        private void button2_Click(object sender, EventArgs e)
        {
            Form formulario = new menu();//new opciones();
            formulario.Show();
            this.Hide();
        }
    }
}
