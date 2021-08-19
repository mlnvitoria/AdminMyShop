using AdminMyShop.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AdminMyShop.Data.Repositories
{
    public class ProductRepository : MyRepository<Product>
    {
        public ProductRepository(ApplicationDbContext context) : base(context) { }

        public override async Task<IEnumerable<Product>> Get()
        {
            return await DbSet.AsNoTracking()
                .OrderBy(p => p.Name)
                .ToListAsync();
        }
    }
}
