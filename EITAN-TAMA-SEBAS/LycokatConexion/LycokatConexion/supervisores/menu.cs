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
    public partial class menu : Form
    {
        public menu() {InitializeComponent();}
        private void usuarios2_Load(object sender, EventArgs e) {this.usuarios1.Hide();}
        private void button1_Click(object sender, EventArgs e)
        {
            this.usuarios1.Show();
            this.estadisticas1.Hide();
        }
        private void usuarios1_Load(object sender, EventArgs e) {}
        private void estadisticas1_Load(object sender, EventArgs e){ this.estadisticas1.Hide();}
        private void button2_Click(object sender, EventArgs e)
        {
            this.estadisticas1.Show();
            this.usuarios1.Hide();
        }

        private void button4_Click(object sender, EventArgs e)
        {
            Form index = new index();
            index.Show();
            this.Close();
        }

        private void pictureBox2_Click(object sender, EventArgs e)
        {

        }

        private void button5_Click(object sender, EventArgs e)
        {
            Application.Exit();
        }
    }
}
