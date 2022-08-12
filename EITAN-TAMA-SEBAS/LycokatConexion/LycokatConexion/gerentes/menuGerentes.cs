using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace LycokatConexion
{
    public partial class menuGerentes : Form
    {
        public menuGerentes() {InitializeComponent();}
        private void usuarios2_Load(object sender, EventArgs e) {}
        private void usuarios1_Load(object sender, EventArgs e) {}
        private void estadisticas1_Load(object sender, EventArgs e) {}
        private void button2_Click(object sender, EventArgs e) 
        {
            this.usuariosVista1.Show();
            this.abm1.Hide();
        }
        private void abm1_Load(object sender, EventArgs e) {}
        private void menuGerentes_Load(object sender, EventArgs e) 
        {
            this.abm1.Hide();
            this.usuariosVista1.Hide();
        }
        private void button1_Click(object sender, EventArgs e)
        {
            this.abm1.Show();
            this.usuariosVista1.Hide();
        }
        private void button4_Click(object sender, EventArgs e)
        {
            Form index = new index();
            index.Show();
            this.Close();
        }
        private void button5_Click(object sender, EventArgs e)
        {
            Application.Exit();
        }
        private void usuariosVista1_Load(object sender, EventArgs e){}
    }
}