using AdminMyShop.Models;

namespace AdminMyShop.Data.Repositories
{
    public class ProductRepository : MyRepository<Product>
    {
        public ProductRepository(ApplicationDbContext context) : base(context) { }
    }
}
