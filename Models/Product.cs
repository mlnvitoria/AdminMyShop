using AdminMyShop.Data.Interfaces;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AdminMyShop.Models
{
    public class Product : IEntity
    {
        [Required]
        public int Id { get; set; }

        [Required]
        [StringLength(150, MinimumLength = 2)]
        public string Name { get; set; }

        [StringLength(500, MinimumLength = 2)] 
        [Column("Description",TypeName = "Text")]
        public string Description { get; set; }

        [Required]
        public float Price { get; set; }

        [Required]
        [DefaultValue(0)]
        public int Quantity { get; set; } = 0;
    }
}
