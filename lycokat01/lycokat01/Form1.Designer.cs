
namespace lycokat01
{
    partial class Form1
    {
        /// <summary>
        /// Variable del diseñador necesaria.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Limpiar los recursos que se estén usando.
        /// </summary>
        /// <param name="disposing">true si los recursos administrados se deben desechar; false en caso contrario.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Código generado por el Diseñador de Windows Forms

        /// <summary>
        /// Método necesario para admitir el Diseñador. No se puede modificar
        /// el contenido de este método con el editor de código.
        /// </summary>
        private void InitializeComponent()
        {
            this.texto = new System.Windows.Forms.Label();
            this.num1 = new System.Windows.Forms.TextBox();
            this.num2 = new System.Windows.Forms.TextBox();
            this.texto2 = new System.Windows.Forms.Label();
            this.suma = new System.Windows.Forms.Button();
            this.resta = new System.Windows.Forms.Button();
            this.multiplicacion = new System.Windows.Forms.Button();
            this.division = new System.Windows.Forms.Button();
            this.resultado = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // texto
            // 
            this.texto.AutoSize = true;
            this.texto.Location = new System.Drawing.Point(244, 247);
            this.texto.Name = "texto";
            this.texto.Size = new System.Drawing.Size(66, 13);
            this.texto.TabIndex = 4;
            this.texto.Text = "numero uno:";
            // 
            // num1
            // 
            this.num1.Location = new System.Drawing.Point(347, 247);
            this.num1.Name = "num1";
            this.num1.Size = new System.Drawing.Size(100, 20);
            this.num1.TabIndex = 5;
            // 
            // num2
            // 
            this.num2.Location = new System.Drawing.Point(347, 273);
            this.num2.Name = "num2";
            this.num2.Size = new System.Drawing.Size(100, 20);
            this.num2.TabIndex = 7;
            // 
            // texto2
            // 
            this.texto2.AutoSize = true;
            this.texto2.Location = new System.Drawing.Point(244, 273);
            this.texto2.Name = "texto2";
            this.texto2.Size = new System.Drawing.Size(65, 13);
            this.texto2.TabIndex = 6;
            this.texto2.Text = "numero dos:";
            // 
            // suma
            // 
            this.suma.Location = new System.Drawing.Point(485, 247);
            this.suma.Name = "suma";
            this.suma.Size = new System.Drawing.Size(20, 23);
            this.suma.TabIndex = 8;
            this.suma.Text = "+";
            this.suma.UseVisualStyleBackColor = true;
            // 
            // resta
            // 
            this.resta.Location = new System.Drawing.Point(511, 247);
            this.resta.Name = "resta";
            this.resta.Size = new System.Drawing.Size(20, 23);
            this.resta.TabIndex = 9;
            this.resta.Text = "-";
            this.resta.UseVisualStyleBackColor = true;
            // 
            // multiplicacion
            // 
            this.multiplicacion.Location = new System.Drawing.Point(485, 276);
            this.multiplicacion.Name = "multiplicacion";
            this.multiplicacion.Size = new System.Drawing.Size(20, 23);
            this.multiplicacion.TabIndex = 10;
            this.multiplicacion.Text = "*";
            this.multiplicacion.UseVisualStyleBackColor = true;
            // 
            // division
            // 
            this.division.Location = new System.Drawing.Point(511, 276);
            this.division.Name = "division";
            this.division.Size = new System.Drawing.Size(20, 23);
            this.division.TabIndex = 11;
            this.division.Text = "/";
            this.division.UseVisualStyleBackColor = true;
            // 
            // resultado
            // 
            this.resultado.AutoSize = true;
            this.resultado.Location = new System.Drawing.Point(372, 333);
            this.resultado.Name = "resultado";
            this.resultado.Size = new System.Drawing.Size(159, 13);
            this.resultado.TabIndex = 12;
            this.resultado.Text = "ACA ESTARA EL RESULTADO";
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(801, 450);
            this.Controls.Add(this.resultado);
            this.Controls.Add(this.division);
            this.Controls.Add(this.multiplicacion);
            this.Controls.Add(this.resta);
            this.Controls.Add(this.suma);
            this.Controls.Add(this.num2);
            this.Controls.Add(this.texto2);
            this.Controls.Add(this.num1);
            this.Controls.Add(this.texto);
            this.Name = "Form1";
            this.Text = "Form1";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label texto;
        private System.Windows.Forms.TextBox num1;
        private System.Windows.Forms.TextBox num2;
        private System.Windows.Forms.Label texto2;
        private System.Windows.Forms.Button suma;
        private System.Windows.Forms.Button resta;
        private System.Windows.Forms.Button multiplicacion;
        private System.Windows.Forms.Button division;
        private System.Windows.Forms.Label resultado;
    }
}

