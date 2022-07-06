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
        private void button1_Click(object sender, EventArgs e)
        {
            this.abm1.Show();
        }
        private void usuarios1_Load(object sender, EventArgs e) {}
        private void estadisticas1_Load(object sender, EventArgs e){}
        private void button2_Click(object sender, EventArgs e){}
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
        private void abm1_Load(object sender, EventArgs e){}
    }
}
