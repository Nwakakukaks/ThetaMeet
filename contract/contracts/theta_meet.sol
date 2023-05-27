
 SPDX-License-Identifier: MIT
 pragma solidity ^0.8.0;

 import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
 import "@openzeppelin/contracts/utils/Counters.sol";

 contract MyNFT is ERC721 {
     using Counters for Counters.Counter;
     Counters.Counter private _tokenIdCounter;
     string private _baseTokenURI;

     constructor(string memory name, string memory symbol, string memory baseTokenURI) ERC721(name, symbol) {
         _baseTokenURI = baseTokenURI;
     }

     function mint(address to) public returns (uint256) {
         _tokenIdCounter.increment();
         uint256 newTokenId = _tokenIdCounter.current();
         _safeMint(to, newTokenId);
         return newTokenId;
     }

     function _baseURI() internal view virtual override returns (string memory) {
         return _baseTokenURI;
     }

     function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
         require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
         return bytes(_baseURI()).length > 0 ? string(abi.encodePacked(_baseURI(), tokenId)) : "";
     }

      function ownsNFT(address wallet, address nftAddress) public view returns (bool) {
          uint256 balance = balanceOf(wallet);
          for (uint256 i = 0; i < balance; i++) {
              uint256 tokenId = tokenOfOwnerByIndex(wallet, i);
              if (IERC721(nftAddress).ownerOf(tokenId) == wallet) {
                  return true;
              }
          }
     return false;
      }
 }

 conntractaddress= 0x1BC1799Ab899a3bE3C25D18B3Dad36cD63d1DE6C