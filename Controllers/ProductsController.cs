using AdminMyShop.Data.Repositories;
using AdminMyShop.Models;
using Microsoft.AspNetCore.Mvc;

namespace AdminMyShop.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : MyController<Product, ProductRepository>
    {
        public ProductsController(ProductRepository repository) : base(repository) { }
    }
}
