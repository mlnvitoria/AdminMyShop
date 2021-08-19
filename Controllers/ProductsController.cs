using AdminMyShop.Data.Interfaces;
using AdminMyShop.Data.Repositories;
using AdminMyShop.Models;
using Microsoft.AspNetCore.Mvc;

namespace AdminMyShop.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : MyController<Product, IRepository<Product>>
    {
        public ProductsController(IRepository<Product> repository) : base(repository) { }
    }
}
